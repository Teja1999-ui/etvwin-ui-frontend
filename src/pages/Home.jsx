import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Banner from "../components/Banner/Banner";
import Row from "../components/Rows/VerticalRow";
import MoreLikeThis from "../components/Rows/ExpandedRow";
import ContinueWatching from "../components/Rows/ContinueWatching";
import CurvedCarousel from "../components/Rows/CurvedCarousel";
import Login from "../components/Login/Login";

import {
  trending,
  recent,
  originals,
  moreLikeThis1,
  moreLikeThis2,
  blockbuster,
  katha,
  suprise,
} from "../components/data/movies";

import Top10 from "../components/Rows/Top10";
import GlassCard from "../components/Rows/GlassCard";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Sidebar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        openLogin={() => setShowLogin(true)}
      />

      <Banner openMenu={openMenu} />

      <div
        style={{
          paddingLeft: openMenu ? "250px" : "90px",
          marginTop: "10px",
        }}
      >
        <Row title="Trending Now" data={trending} />

        <ContinueWatching />

        <Row title="Recently Added" data={recent} />

        <div className="section new-section">
          <MoreLikeThis title="Feel Good" data={moreLikeThis1} />

          <CurvedCarousel />

          <Row title="Original Films" data={originals} />

          <MoreLikeThis
            title="More Like This"
            data={moreLikeThis2}
          />

          <Row title="Blockbuster Hits" data={blockbuster} />

          <Top10 />

          <Row title="Katha Sudha" data={katha} />

          <GlassCard title="Popular Movies" />

          <Row title="Surprise Stories" data={suprise} />
        </div>
      </div>

      {showLogin && (
        <div
          className="auth-popup-overlay"
          onClick={() => setShowLogin(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Login onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </div>
  );
}