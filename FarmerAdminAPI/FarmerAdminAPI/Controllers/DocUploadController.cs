using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using FarmerAdminAPI.Models;

namespace FarmerAdminAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class DocUploadController : ControllerBase
    {
        public static IWebHostEnvironment _environment;
        public DocUploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }
        public class FileUploadApi
        {
            public IFormFile Files { get; set; }

        }
        [HttpPost]
        public async Task<string> Post([FromForm] FileUploadApi objfile)
        {

            if (objfile.Files.Length > 0)
            {
                try
                {
                    if (!Directory.Exists(_environment.WebRootPath + "\\Upload\\"))
                    {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\Upload\\");
                    }
                    using (FileStream fileStream = System.IO.File.Create(_environment.WebRootPath + "\\Upload\\" + objfile.Files.FileName))
                    {
                        objfile.Files.CopyTo(fileStream);
                        fileStream.Flush();
                        return "\\Upload\\" + objfile.Files.FileName;
                    }
                }
                catch (Exception ex)
                {
                    return ex.Message.ToString();
                }

            }
            else
            {
                return "Failed";
            }

        }
        //[HttpPost, DisableRequestSizeLimit]
        //public IActionResult Upload()
        //{
        //    try
        //    {
        //        var file = Request.Form.Files[0];
        //        var folderName = Path.Combine("wwwroot", "Upload");
        //        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        //        if (file.Length > 0)
        //        {
        //            var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
        //            var fullPath = Path.Combine(pathToSave, fileName);
        //            var dbPath = Path.Combine(folderName, fileName);

        //            using (var stream = new FileStream(fullPath, FileMode.Create))
        //            {
        //                file.CopyTo(stream);
        //            }

        //            return Ok(new { dbPath });
        //        }
        //        else
        //        {
        //            return BadRequest();
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Internal server error: {ex}");
        //    }
        //}
    }
}