import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Viranga",
    lastName: "Jayawardana",
    email: "virangapasindu4@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={3000}
          />
        </div>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[
          { $id: "1", currentBalance: 150 },
          { $id: "2", currentBalance: 150 },
        ]}
      />
    </section>
  );
};

export default Home;
