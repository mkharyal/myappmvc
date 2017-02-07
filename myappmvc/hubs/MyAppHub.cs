using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Net;

namespace myappmvc.hubs
{
    public class MyAppHub : Hub
    {
        public void Alert(WebException ex)
        {
            Clients.All.alert(ex.Message);
        }
    }
}