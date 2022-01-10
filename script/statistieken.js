// load library
(function(w,d,s,g,js,fjs){
    g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(cb){this.q.push(cb)}};
    js=d.createElement(s);fjs=d.getElementsByTagName(s)[0];
    js.src='https://apis.google.com/js/platform.js';
    fjs.parentNode.insertBefore(js,fjs);js.onload=function(){g.load('analytics')};
  }(window,document,'script'));
//   !( function (t) {
//     function i(s) {
//       if (e[s]) return e[s].exports;
//       var n = (e[s] = { exports: {}, id: s, loaded: !1 });
//       return t[s].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports;
//     }
//     var e = {};
//     return (i.m = t), (i.c = e), (i.p = ""), i(0);
//   })([
//     function (t, i) {
//       "use strict";
//       gapi.analytics.ready(function () {
//         gapi.analytics.createComponent("ActiveUsers", {
//           initialize: function () {
//             (this.activeUsers = 0),
//               gapi.analytics.auth.once("signOut", this.handleSignOut_.bind(this));
//           },
//           execute: function () {
//             this.polling_ && this.stop(),
//               this.render_(),
//               gapi.analytics.auth.isAuthorized()
//                 ? this.pollActiveUsers_()
//                 : gapi.analytics.auth.once(
//                     "signIn",
//                     this.pollActiveUsers_.bind(this)
//                   );
//           },
//           stop: function () {
//             clearTimeout(this.timeout_),
//               (this.polling_ = !1),
//               this.emit("stop", { activeUsers: this.activeUsers });
//           },
//           render_: function () {
//             var t = this.get();
//             (this.container =
//               "string" == typeof t.container
//                 ? document.getElementById(t.container)
//                 : t.container),
//               (this.container.innerHTML = t.template || this.template),
//               (this.container.querySelector("b").innerHTML = this.activeUsers);
//           },
//           pollActiveUsers_: function () {
//             var t = this.get(),
//               i = 1e3 * (t.pollingInterval || 5);
//             if (isNaN(i) || 5e3 > i)
//               throw new Error("Frequency must be 5 seconds or more.");
//             (this.polling_ = !0),
//               gapi.client.analytics.data.realtime
//                 .get({ ids: t.ids, metrics: "rt:activeUsers" })
//                 .then(
//                   function (t) {
//                     var e = t.result,
//                       s = e.totalResults ? +e.rows[0][0] : 0,
//                       n = this.activeUsers;
//                     this.emit("success", { activeUsers: this.activeUsers }),
//                       s != n && ((this.activeUsers = s), this.onChange_(s - n)),
//                       (this.polling_ = !0) &&
//                         (this.timeout_ = setTimeout(
//                           this.pollActiveUsers_.bind(this),
//                           i
//                         ));
//                   }.bind(this)
//                 );
//           },
//           onChange_: function (t) {
//             var i = this.container.querySelector("b");
//             i && (i.innerHTML = this.activeUsers),
//               this.emit("change", { activeUsers: this.activeUsers, delta: t }),
//               t > 0
//                 ? this.emit("increase", {
//                     activeUsers: this.activeUsers,
//                     delta: t,
//                   })
//                 : this.emit("decrease", {
//                     activeUsers: this.activeUsers,
//                     delta: t,
//                   });
//           },
//           handleSignOut_: function () {
//             this.stop(),
//               gapi.analytics.auth.once("signIn", this.handleSignIn_.bind(this));
//           },
//           handleSignIn_: function () {
//             this.pollActiveUsers_(),
//               gapi.analytics.auth.once("signOut", this.handleSignOut_.bind(this));
//           },
//           template:
//             '<div class="ActiveUsers">Active Users: <b class="ActiveUsers-value"></b></div>',
//         });
//       });
//     },
//   ]);
// ;
  gapi.analytics.ready(function() {
    // Authorize the user.
    var CLIENT_ID = config.CLIENT_ID;

    gapi.analytics.auth.authorize({
      container: 'auth-button',
      clientid: CLIENT_ID,
    });
  // Create the view selector.
  var viewSelector = new gapi.analytics.ViewSelector({
    container: 'view-selector'
  });
  
  viewSelector.on('change', function(ids) {
    console.log(ids);
  });
  
  // viewSelector.execute();

  // Create the timeline chart.
      var timeline = new gapi.analytics.googleCharts.DataChart({
        reportType: 'ga',
        query: {
          'dimensions': 'ga:date',
          'metrics': 'ga:sessions',
          'start-date': '30daysAgo',
          'end-date': 'yesterday',
        },
        chart: {
          type: 'LINE',
          container: 'timeline'
        }
      });

      var chart = new gapi.analytics.googleCharts.DataChart({
        query: {
          ids: 'ga:298288616',
          metrics: 'ga:sessions',
          dimensions: 'ga:date'
        },
        chart: {
          type: 'LINE',
          container: 'line-chart',
          options: {
            title: 'Sessions over the past week.',
            fontSize: 12
          }
        }
      });
      chart.on('success', function(response) {
        // response.chart : the Google Chart instance.
        // response.data : the Google Chart data object.
      });
      
      chart.execute();

      
      // var activeUsers = new gapi.analytics.ext.ActiveUsers({
      //   container: 'active-users',
      //   query: {
      //     'ids' : 'ga:216279801',
      //     'dimensions': 'ga:date',
      //     'metrics': 'ga:7daysUser',
      //     'start-date': '30daysAgo',
      //     'end-date': '2022-10-09',
      //   }
      // });
 
        // Hook up the components to work together.
      gapi.analytics.auth.on('success', function(response) {
        viewSelector.execute();
        // activeUsers.execute();
        // chart.execute();
      });

    
      viewSelector.on('change', function(ids) {
        var newIds = {
          query: {
            ids: ids
          }
        }
        timeline.set(newIds).execute();
      });
    });