
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Data;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LanguageFrameworkController : ControllerBase
    {
        private readonly PortfolioContext _context;

        public LanguageFrameworkController(PortfolioContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LanguageFramework>>> Get()
        {
            var languageFrameworks = await _context.LanguageFrameworks
                .AsNoTracking()
                .OrderBy(p => p.ProficiencyLevel)
                .ToListAsync();

            return Ok(languageFrameworks);
        }
    }
}
