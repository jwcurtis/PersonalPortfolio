namespace PersonalPortfolio.Server
{
    public class Projects
    {
        public string? projectName { get; set; }
        public string? projectType { get; set; }
        public string? projectDescription { get; set; }
        public string? projectLink { get; set; }

        public DateOnly dateCompleted { get; set; }
        public DateOnly lastUpdated { get; set; }

    }
}
