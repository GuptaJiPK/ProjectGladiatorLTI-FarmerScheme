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
    public class BidCropsController : ControllerBase
    {
        private readonly FarmerSchemeContext _context;

        public BidCropsController(FarmerSchemeContext context)
        {
            _context = context;
        }

        // GET: api/BidCrops
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BidCrop>>> GetBidCrops()
        {
            return await _context.BidCrops.ToListAsync();
        }

        // GET: api/BidCrops/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BidCrop>> GetBidCrop(int id)
        {
            var bidCrop = await _context.BidCrops.FindAsync(id);

            if (bidCrop == null)
            {
                return NotFound();
            }

            return bidCrop;
        }

        // PUT: api/BidCrops/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBidCrop(int id, BidCrop bidCrop)
        {
            if (id != bidCrop.BcId)
            {
                return BadRequest();
            }

            _context.Entry(bidCrop).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BidCropExists(id))
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

        // POST: api/BidCrops
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BidCrop>> PostBidCrop(BidCrop bidCrop)
        {
            _context.BidCrops.Add(bidCrop);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBidCrop", new { id = bidCrop.BcId }, bidCrop);
        }

        
        

        // DELETE: api/BidCrops/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBidCrop(int id)
        {
            var bidCrop = await _context.BidCrops.FindAsync(id);
            if (bidCrop == null)
            {
                return NotFound();
            }

            _context.BidCrops.Remove(bidCrop);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BidCropExists(int id)
        {
            return _context.BidCrops.Any(e => e.BcId == id);
        }
    }
}
