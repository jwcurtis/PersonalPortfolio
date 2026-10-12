namespace PersonalPortfolio.Server.Models
{
    public class Project
    {
        public int ProjectId { get; set; }

        public string ProjectName { get; set; } = string.Empty;

        public string ProjectType { get; set; } = string.Empty;

        public string ProjectDescription { get; set; } = string.Empty;

        public string ProjectLink { get; set; } = string.Empty;

        public DateOnly DateCompleted { get; set; }

        public DateOnly LastUpdated { get; set; }
    }
}