using System.ComponentModel.DataAnnotations;

namespace GymWebApp.ViewModels
{
    public class RegisterViewModel
    {
        public string Name { get; set; }

        [Required]
        public string Email { get; set; }

        //[Required]
        //[Display(Name = "Год рождения")]
        //public int Year { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string PasswordConfirm { get; set; }
    }
}
