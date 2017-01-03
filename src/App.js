import React, { Component } from 'react';
import './App.css';
import { Layout, Button, Input, Row, Col, Card, Timeline, Icon, Tag } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const strftime = require('strftime');

const exampleTimesheet = `Alex
1003+1804
1014+1252+1322+2000
1009+1803
week
1000+2000
1000+2000

Bonnie
1501+2000
1000+1530
week
1500+1802

Cecilia
1102+1648+1744+1952
week
1135+2001
1706+2000
1756+1959
1730+2020
1129+1803

Chris
1000+1500
1000+1500
955+1528
week
1000+1525
1000+1500

Elise
1002+1530+1600+2000
1002+1616+1646+2000
1006+1200+1230+1803
week
1002+1200+1230+2000
1007+1200+1230+2000
1001+1200+1230+2033
955+1500

Janey
1500+2000

Jocelyn
955+1200+1230+2000
1000+1458
1000+2000
1434+2000

Kristina
1500+2016
1000+1500
1004+1625
week
1503+2000
1500+2000

Matt K
1000+1540+1610+2000
1000+1630+1700+2000
954+1536
week
1000+2000
1000+1627
1000+1850

Matt S
1500+2017
1500+2000`

class Timecard extends Component {
  render(){
    return (
      <Card title={this.props.name} extra={<b>{this.props.total}</b>}>
        {this.props.weeks.map((week, index) => {
          return (
            <Timeline key={index}>
              {week.days.map((day, index) => {
                return (
                  <Timeline.Item key={index} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                    <span style={{float: 'right'}}><small>{day.total}h</small></span>
                    {day.timespans.map((t, index) => {
                      return <span key={index} style={{display: "block"}}>{strftime("%H:%M", t.start)}-{strftime("%H:%M", t.stop)}</span>;
                    })}
                  </Timeline.Item>
                );
              })}

              <Timeline.Item dot={<Icon type="calendar" style={{ fontSize: '16px' }} />}>
                 Week total
                <span style={{float: 'right'}}><b>{week.total}h</b></span>
              </Timeline.Item>
            </Timeline>
          );
        })}
      </Card>
    );
  }
}

class App extends Component {
  timecardData() {
    return [
      {
        name: "Cecilia lol",
        total: 30.68,
        weeks: [
          {
            total: 7.9,
            days: [
              {
                timespans: [
                  {
                    start: new Date(),
                    stop: new Date(),
                  },
                  {
                    start: new Date(),
                    stop: new Date(),
                  },
                ],
                total: 7.9,
              }
            ]
          },
          {
            total: 22.78,
            days: [
              {
                timespans: [
                  {
                    start: new Date(),
                    stop: new Date(),
                  },
                ],
                total: 7.9,
              }
            ]
          },
        ],
      },
    ]
  }

  render() {
    return (
      <Layout>
        <Content>
          <Row gutter={16}>
            <Col className={"gutter-row"} span={6}>
              <Input
                type="textarea"
                placeholder=""
                defaultValue={exampleTimesheet}
                autosize={{ minRows: 2 }} />
            </Col>
            <Col className={"gutter-row"} span={18}>
              <h1><Input defaultValue={"2017-01-03"} /></h1>
              <Row gutter={8}>
                {this.timecardData().map((timecard, index) => {
                  return (
                    <Col className={"gutter-row"} span={6} key={index}>
                      <Timecard {...timecard} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
