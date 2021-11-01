namespace GymWebApp.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string MiddleName { get; set; }
        public string ContactPhone { get; set; }

        public int TrainerId { get; set; }
        public virtual Trainer Trainer { get; set; }
    }
}
