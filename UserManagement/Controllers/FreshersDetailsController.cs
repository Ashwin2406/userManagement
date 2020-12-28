using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserManagement.Models;

namespace UserManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FreshersDetailsController : ControllerBase
    {
        private readonly FreshersDetailContext _context;

        public FreshersDetailsController(FreshersDetailContext context)
        {
            _context = context;
        }

        // GET: api/FreshersDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FreshersDetail>>> GetFreshersDetails()
        {
            return await _context.FreshersDetails.ToListAsync();
        }

        // GET: api/FreshersDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FreshersDetail>> GetFreshersDetail(int id)
        {
            var freshersDetail = await _context.FreshersDetails.FindAsync(id);

            if (freshersDetail == null)
            {
                return NotFound();
            }

            return freshersDetail;
        }

        // PUT: api/FreshersDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFreshersDetail(int id, FreshersDetail freshersDetail)
        {
            if (id != freshersDetail.FresherId)
            {
                return BadRequest();
            }

            _context.Entry(freshersDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FreshersDetailExists(id))
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

        // POST: api/FreshersDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FreshersDetail>> PostFreshersDetail(FreshersDetail freshersDetail)
        {
            _context.FreshersDetails.Add(freshersDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFreshersDetail", new { id = freshersDetail.FresherId }, freshersDetail);
        }

        // DELETE: api/FreshersDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFreshersDetail(int id)
        {
            var freshersDetail = await _context.FreshersDetails.FindAsync(id);
            if (freshersDetail == null)
            {
                return NotFound();
            }

            _context.FreshersDetails.Remove(freshersDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FreshersDetailExists(int id)
        {
            return _context.FreshersDetails.Any(e => e.FresherId == id);
        }
    }
}
