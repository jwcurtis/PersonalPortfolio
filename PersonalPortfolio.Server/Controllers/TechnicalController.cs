using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Data;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TechnicalController : ControllerBase
    {
        private readonly PortfolioContext _context;
        public TechnicalController(PortfolioContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Technical>>> Get()
        {
            var technical = await _context.Technicals
                .AsNoTracking()
                .OrderByDescending(p => p.TechnicalId)
                .ToListAsync();
            return Ok(technical);
        }
    }
}
