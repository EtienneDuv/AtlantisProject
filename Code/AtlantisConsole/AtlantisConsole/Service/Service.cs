using AtlantisConsole.Calculation;
using AtlantisConsole.Helpers;
using AtlantisConsole.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AtlantisConsole.Service
{
    public class Service : IService
    {
        private readonly DataContext db = new DataContext();
        private readonly HttpClient httpClient = new HttpClient();
        private ComplexCalculation complexCalculation = new ComplexCalculation();
        private const string JavaIp= "http://192.168.42.107:8080/";

        //public void PostMetric(Metric metric)
        //{
        //    MetricCalculation mc = new MetricCalculation();
        //    mc.MetricId = 2;
        //    mc.Average = 15;
        //    mc.MetricId = metric.iddevice;
        //    mc.Average = metric.metricvalue;
        //    db.MetricCalculations.Add(mc);
        //    db.SaveChanges();
        //    //var json = JsonConvert.SerializeObject(metric);
        //    //httpClient.PostAsync("http://localhost:8000", httpContent);
        //}

        //public Task SendCommand(int deviceId, string command)
        //{
        //    //var json = JsonConvert.SerializeObject(metric);
        //    //var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
        //    //httpClient.PostAsync("http://localhost:8000", httpContent);
        //}

        public void PostDeviceMetric(string deviceId, DeviceMetric deviceMetric)
        {
            Console.WriteLine("Device Id: " + deviceId);
            Console.WriteLine(deviceMetric.metricValue);
            Metric m = new Metric();
            m.iddevice = deviceId;
            m.name = deviceMetric.deviceType;
            m.metricvalue = deviceMetric.metricValue;
            m.metricdate = deviceMetric.metricDate;

            var json = JsonConvert.SerializeObject(m);
            var httpContent = new StringContent(json, Encoding.UTF8, "application/json");
            httpClient.PostAsync(JavaIp + "API/webresources/generic", httpContent);
        }

        public void PostCalculation(string iddevice, double[] metricvalue)
        {
            var average = complexCalculation.Averages(metricvalue);

            MetricCalculation mc = new MetricCalculation();
            mc.Average = average;
            mc.IdDevice = iddevice;

            db.MetricCalculations.Add(mc);
            db.SaveChanges();
        }

        public MetricCalculation GetCalculation(string iddevice)
        {
            var result = db.MetricCalculations.Where(o => o.IdDevice == iddevice).OrderByDescending(a => a.Id).FirstOrDefault();

            return result;
        }

        public string GetString()
        {
            return "Here is Zatan";
        }
    }
}
