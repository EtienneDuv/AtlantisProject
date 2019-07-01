using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlantisConsole.Model
{
    public class Metric
    {
        public string iddevice { get; set; }
        public string name { get; set; }
        public double metricvalue { get; set; }
        public string metricdate { get; set; }
    }
}