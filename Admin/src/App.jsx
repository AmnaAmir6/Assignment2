import './App.css'
import Navbar from './components/NavBar'
import SideBar from './components/SildeBar'
import AnalyticsCard from './components/AnalyticsCard'

function App() {

  return (
    <>
      <div className="wrapper">
        <SideBar />
        <div className="main">
          <Navbar />
          <main className="content">
            <div className="container-fluid p-0">

              <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>

              <div className="row">
                <div className="col-xl-6 col-xxl-5 d-flex">
                  <div className="w-100">
                    <div className="row">
                      <div className="col-sm-6">
                        <AnalyticsCard
                          title="Sales"
                          value="2.382"
                          percentageChange={-3.65}
                          icon="truck"
                        />
                        <AnalyticsCard
                          title="Visitors"
                          value="14.212"
                          percentageChange={5.25}
                          icon="users"
                        />
                      </div>
                      <div className="col-sm-6">
                        <AnalyticsCard
                          title="Earnings"
                          value="$21.300"
                          percentageChange={6.65}
                          icon="dollar-sign"
                        />
                        <AnalyticsCard
                          title="Orders"
                          value="64"
                          percentageChange={-2.25}
                          icon="shopping-cart"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-xxl-7">
                  <div className="card flex-fill w-100">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Recent Movement</h5>
                    </div>
                    <div className="card-body py-3">
                      <div className="chart chart-sm">
                        <canvas id="chartjs-dashboard-line"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
