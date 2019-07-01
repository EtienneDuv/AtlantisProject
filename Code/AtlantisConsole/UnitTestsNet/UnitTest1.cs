using System;
using System.Collections.Generic;
using AtlantisConsole.Calculation;
using AtlantisConsole.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestsNet
{
    [TestClass]
    public class UnitTest1
    {
        ComplexCalculation complexCalculation = new ComplexCalculation();

        [TestMethod]
        public void AveragesTest()
        {
            double[] metric = new double[] { 12, 10 };

            var calc = complexCalculation.Averages(metric);

            double expected = 11;

            Assert.AreEqual(expected, calc);
        }

    }
}
