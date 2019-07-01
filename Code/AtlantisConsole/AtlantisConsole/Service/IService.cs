using AtlantisConsole.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using System.Threading.Tasks;

namespace AtlantisConsole.Service
{
    [ServiceContract]
    public interface IService
    {
        [OperationContract]
        [WebGet]
        string GetString();

        //[OperationContract]
        //[WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
        //void PostMetric(Metric metric);

        [OperationContract]
        [WebInvoke(Method = "POST", UriTemplate = "/device/{deviceId}/telemetry", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Bare)]
        void PostDeviceMetric(string deviceId, DeviceMetric deviceMetric);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
        void PostCalculation(string iddevice, double[] metricvalue);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle =WebMessageBodyStyle.Wrapped)]
        MetricCalculation GetCalculation(string iddevice);

    }
}
