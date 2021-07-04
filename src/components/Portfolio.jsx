import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import Social from "./Social";

Modal.setAppElement("#root");

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <div className="tokyo_tm_portfolio">
        <div className="tokyo_tm_title">
          <div className="title_flex">
            <div className="left">
              <span>Portfolio</span>
              <h3>Creative Portfolio</h3>
            </div>
          </div>
        </div>
        {/* END TOKYO_TM_TITLE */}
        <div className="portfolio_filter">
          <Tabs>
            <TabList>
              <Tab>All</Tab>
              <Tab>Ui/Ux</Tab>
              <Tab>Website</Tab>
              <Tab>Graphic</Tab>
              <Tab>Creative</Tab>
            </TabList>
            {/* END TABLIST */}
            <div className="list_wrapper">
              <TabPanel>
                <ul className="portfolio_list">
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img
                          src="assets/img/portfolio/carriage-small.jpg"
                          alt="Portfolio"
                        />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/portfolio/carriage-big.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END VIMEO */}
                  <li>
                    <div className="inner" onClick={toggleModalTwo}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen2}
                        onRequestClose={toggleModalTwo}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalTwo}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END YOUTUBE */}
                  <li>
                    <div className="inner" onClick={toggleModalThree}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen3}
                        onRequestClose={toggleModalThree}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalThree}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END SOUNDCLOUD */}
                  <li>
                    <div className="inner" onClick={toggleModalFour}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen4}
                        onRequestClose={toggleModalFour}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalFour}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END ALL PORTFOLIO GALLERY */}

              <TabPanel>
                <ul className="portfolio_list">
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END VIMEO */}
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END VIMEO */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END UI/UX GALLERY */}

              <TabPanel>
                <ul className="portfolio_list">
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END YOUTUBE */}
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END YOUTUBE */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END WEBSITE GALLERY */}

              <TabPanel>
                <ul className="portfolio_list">
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END SOUNDCLOUD */}
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END SOUNDCLOUD */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END GRAPHIC GALLERY */}

              <TabPanel>
                <ul className="portfolio_list">
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END IMAGE */}
                  <li>
                    <div className="inner" onClick={toggleModalOne}>
                      <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <img src="assets/img/portfolio/5.jpg" alt="Portfolio" />
                      </div>
                      <Modal
                        isOpen={isOpen}
                        onRequestClose={toggleModalOne}
                        contentLabel="My dialog"
                        className="mymodal"
                        overlayClassName="myoverlay"
                        closeTimeoutMS={500}
                      >
                        <div className="tokyo_tm_modalbox_news">
                          <button
                            className="close-modal"
                            onClick={toggleModalOne}
                          >
                            <img
                              src="assets/img/svg/cancel.svg"
                              alt="close icon"
                            />
                          </button>
                          {/* END CLOSE ICON */}
                          <div className="box_inner">
                            <div className="description_wrap scrollable">
                              <div className="image">
                                <img
                                  src="assets/img/thumbs/4-3.jpg"
                                  alt="tumb"
                                />
                                <div
                                  className="main"
                                  style={{
                                    backgroundImage:
                                      "url(assets/img/news/1.jpg)",
                                  }}
                                ></div>
                              </div>
                              {/* END IMAGE */}
                              <div className="details">
                                <div className="extra">
                                  <p className="date">
                                    By <a href="#">Alex Watson</a>
                                    <span>05 April 2021</span>
                                  </p>
                                </div>
                                <h3 className="title">
                                  Format releases a new tool that enables direct
                                  video hosting
                                </h3>
                              </div>
                              {/* END DETAILS */}
                              <div className="main_content ">
                                <div className="descriptions">
                                  <p className="bigger">
                                    Just because we can't get out and about like
                                    we normally would, doesn’t mean we have to
                                    stop taking pictures. There’s still plenty
                                    you can do, provided you're prepared to use
                                    some imagination. Here are a few ideas to
                                    keep you shooting until normal life resumes.
                                  </p>
                                  <p>
                                    Most photographers love to shoot the
                                    unusual, and you don’t get much more unusual
                                    than These Unprecedented Times. Right now
                                    everything counts as out of the ordinary.
                                    There are a number of remarkable things
                                    about these lockdown days that are worth
                                    photographing now so we can remember them
                                    when it is all over.
                                  </p>
                                  <p>
                                    Streets empty that are usually busy are
                                    remarkable and can evoke the sense of
                                    historical pictures from before the
                                    invention of the motorcar. Other things that
                                    are different at the moment will be queues
                                    to get into stores and the lines marked out
                                    on the floor to show how far apart we should
                                    be.
                                  </p>
                                  <div className="quotebox">
                                    <div className="icon">
                                      <img
                                        className="svg"
                                        src="assets/img/svg/quote.svg"
                                        alt="tumb"
                                      />
                                    </div>
                                    <p>
                                      Most photographers find it hard to see
                                      interesting pictures in places in which
                                      they are most familiar. A trip somewhere
                                      new seems always exactly what our
                                      photography needed, as shooting away from
                                      home consistently inspires us to new
                                      artistic heights.
                                    </p>
                                  </div>
                                  {/* END QUOTEBOX */}
                                  <p>
                                    Pretend everything is new and that you
                                    haven’t seen it before, and then you will be
                                    free to notice the leading lines, the places
                                    where one edge meets another in delightful
                                    geometric harmony, and how the ordinary
                                    things in the kitchen are transformed when
                                    the light is on or off.
                                  </p>
                                  <p>
                                    The trick here is to look slowly, and then
                                    look again. Take the time to look in detail
                                    and to look at the same thing from different
                                    angles, with different light, long lenses
                                    and wide lenses. Then move to the left a
                                    bit. You may never feel the need to leave
                                    the house again.
                                  </p>
                                </div>
                                {/* END DESCRIPTION */}
                                <div className="news_share">
                                  <span>Share:</span>
                                  <Social />
                                  {/* END SOCIAL SHARE */}
                                </div>
                                {/* END NEWS SHARE */}
                              </div>
                            </div>
                          </div>
                          {/* END BOX INNER */}
                        </div>
                        {/* END MODALBOX NEWS */}
                      </Modal>
                    </div>
                  </li>
                  {/* END IMAGE */}
                </ul>
                {/* END PORTFOLIO LIST */}
              </TabPanel>
              {/* END CREATIVE PORTFOLIO GALLERY */}
              {/* END TABPANEL */}
            </div>
            {/* END LIST WRAPPER */}
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
