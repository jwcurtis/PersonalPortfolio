using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Data;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly PortfolioContext _context;
        public ContactsController(PortfolioContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contacts>>> Get()
        {
            var contacts = await _context.Contacts
                .AsNoTracking()
                .OrderByDescending(p => p.ContactId)
                .ToListAsync();
            return Ok(contacts);
        }
    }
}
