using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserManagement.Models
{
    public class FreshersDetail
    {
        [Key]
        public int FresherId { get; set; }

        [Column(TypeName="nvarchar(40)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(40)")]

        public string SecondName { get; set; }

        [Column(TypeName = "nvarchar(100)")]

        public string PhoneNumber { get; set; }

        [Column(TypeName = "nvarchar(100)")]

        public string EmailId { get; set; }

        [Column(TypeName = "nvarchar(250)")]

        public string Address { get; set; }

        [Column(TypeName = "nvarchar(10)")]

        public string Gender { get; set; }

        [Column(TypeName = "nvarchar(10)")]

        public string Active { get; set; }


    }
}
