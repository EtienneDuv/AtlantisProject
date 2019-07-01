using AtlantisConsole.Helpers;
using AtlantisConsole.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AtlantisConsole.Calculation
{
    public class ComplexCalculation
    {
        private DataContext _dataContext = new DataContext();

        public double Averages(double[] metricvalue)
        {
            double total = 0;

            for (var i = 0; i < metricvalue.Length; i++)
            {
                total += metricvalue[i];
            }

            var average = total / metricvalue.Length;

            return average;
        }

        public double Percentages(List<Metric> metrics)
        {
            return 0;
        }
    }
}
