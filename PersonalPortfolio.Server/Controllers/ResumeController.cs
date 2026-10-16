using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Data;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ResumeController : ControllerBase
    {
        private readonly PortfolioContext _context;
        public ResumeController(PortfolioContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResumeExperience>>> Get()
        {
            var resumeExperience = await _context.ResumeExperience
                .AsNoTracking()
                .OrderByDescending(p => p.DateStarted)
                .ToListAsync();
            return Ok(resumeExperience);
        }
    }
}
