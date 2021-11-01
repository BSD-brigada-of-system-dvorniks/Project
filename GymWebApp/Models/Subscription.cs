namespace GymWebApp.Models
{
    public class Subscription
    {
        public int Id { get; set; }

        public int ClientId { get; set; }
        public virtual Client Client { get; set; }
        public int RateId { get; set; }
        public virtual Rate Rate { get; set; }
        public int TrainCount { get; set; }
    }
}