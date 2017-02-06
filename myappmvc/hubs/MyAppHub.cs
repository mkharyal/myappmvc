using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace myappmvc.hubs
{
    public class MyAppHub : Hub
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}