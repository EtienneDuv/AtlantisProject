using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlantisConsole.Model
{
    public class MetricCalculation
    {
        [Key]
        public int Id { get; set; }
        public string IdDevice { get; set; }
        public double Average { get; set; }
        public double Percentage { get; set; }
    }
}
