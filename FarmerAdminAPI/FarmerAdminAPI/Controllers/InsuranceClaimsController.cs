using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FarmerAdminAPI.Models;

namespace FarmerAdminAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InsuranceClaimsController : ControllerBase
    {
        private readonly FarmerSchemeContext _context;

        public InsuranceClaimsController(FarmerSchemeContext context)
        {
            _context = context;
        }

        // GET: api/InsuranceClaims
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InsuranceClaim>>> GetInsuranceClaims()
        {
            return await _context.InsuranceClaims.ToListAsync();
        }

        // GET: api/InsuranceClaims/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InsuranceClaim>> GetInsuranceClaim(int id)
        {
            var insuranceClaim = await _context.InsuranceClaims.FindAsync(id);

            if (insuranceClaim == null)
            {
                return NotFound();
            }

            return insuranceClaim;
        }

        // PUT: api/InsuranceClaims/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInsuranceClaim(int id, InsuranceClaim insuranceClaim)
        {
            if (id != insuranceClaim.ClaimId)
            {
                return BadRequest();
            }

            _context.Entry(insuranceClaim).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InsuranceClaimExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InsuranceClaims
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InsuranceClaim>> PostInsuranceClaim(InsuranceClaim insuranceClaim)
        {
            _context.InsuranceClaims.Add(insuranceClaim);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInsuranceClaim", new { id = insuranceClaim.ClaimId }, insuranceClaim);
        }

        //status change method
        [HttpPost]
        [Route("approved")]

        public IActionResult ChangeStatus(int claimid)
        {
            InsuranceClaim claim = _context.InsuranceClaims.Where(c => c.ClaimId == claimid).FirstOrDefault();
            claim.ClaimStatus = "claimed";
            _context.SaveChanges();
            return Ok("Claim is Approved");

        }

        // DELETE: api/InsuranceClaims/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInsuranceClaim(int id)
        {
            var insuranceClaim = await _context.InsuranceClaims.FindAsync(id);
            if (insuranceClaim == null)
            {
                return NotFound();
            }

            _context.InsuranceClaims.Remove(insuranceClaim);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InsuranceClaimExists(int id)
        {
            return _context.InsuranceClaims.Any(e => e.ClaimId == id);
        }
    }
}
