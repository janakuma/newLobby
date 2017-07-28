import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFile: [
        {item: "globe", own: "1"},
        {item: "globe", own: "2"},
        {item: "globe", own: "3"},
        {item: "globe", own: "4"},
        {item: "globe", own: "5"},
        {item: "globe", own: "6"},
        {item: "globe", own: "7"},
        {item: "globe", own: "8"},
        {item: "globe", own: "9"},
        {item: "globe", own: "10"}
      ],

      rewardFile: [
        {img: "globe", caption: "설명", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "1"},
        {img: "globe", caption: "1", num: "11"}
      ]
    };
  };

  render() {
    return (
      <div>
        <aside>
          <button className="bro-character-setup">
            <p>
                CHANGE
                APPEARANCE
            </p>
            <span>x <i>3,000</i></span>
          </button>
        </aside>

        <div className="bro-contents bro-page-inventory">
          <section className="bro-invenBox bro-wardrobe">
            <header>
              <h3>Wardrobe</h3>
              <a>globe</a>
            </header>

            <div className="bro-broderWrap active">
              <nav className="bro-itemNav">
                <a>
                  <img src="/images/item_176/a.png" alt="" />
                </a>
              </nav>

              <div className="bro-list">
                <ul>
                  {this.state.dataFile.map((itemList, i) => {
                    return(
                      <ItemInfo item={itemList.item} own={itemList.own} />
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>

          <section className="bro-invenBox bro-rewards">
            <header>
              <h3>Rewards</h3>
            </header>

            <div className="bro-broderWrap">
              <div className="bro-list">
                <ul>
                  {this.state.rewardFile.map((rewardList, i) => {
                    return (
                      <RewardInfo img={rewardList.img} caption={rewardList.caption} num={rewardList.num}></RewardInfo>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
};

class ItemInfo extends React.Component {
  render() {
    return(
      <li>{this.props.item} {this.props.own}</li>
    )
  }
}


class RewardInfo extends React.Component {
  render() {
    return (
      <li>
        <figure>{this.props.img}</figure>
        <p className="bro-caption">{this.props.caption}</p>
        <span className="bro-itemNum">x<i>{this.props.num}</i></span>
      </li>
    );
  }
}


