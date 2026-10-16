
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersonalPortfolio.Server.Data;
using PersonalPortfolio.Server.Models;

namespace PersonalPortfolio.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly PortfolioContext _context;

        public ProjectsController(PortfolioContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> Get()
        {
            var projects = await _context.Projects
                .AsNoTracking()
                .OrderByDescending(p => p.DateCompleted)
                .ToListAsync();

            return Ok(projects);
        }
    }
}
