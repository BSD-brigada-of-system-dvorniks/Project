using Microsoft.AspNetCore.Identity;

namespace GymWebApp.Models
{
    public class User : IdentityUser
    {
        public int Year { get; set; }
    }
}