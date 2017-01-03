import React, { Component } from 'react';
import './App.css';
import { Layout, Button, Input, Row, Col, Card, Timeline, Icon, Tag } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const strftime = require('strftime');

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}

const exampleTimesheet = `Alex
1003+1804
1014+1252 1322+2000
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
1102+1648 1744+1952
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
1002+1530 1600+2000
1002+1616 1646+2000
1006+1200 1230+1803
week
1002+1200 1230+2000
1007+1200 1230+2000
1001+1200 1230+2033
955+1500

Janey
1500+2000

Jocelyn
955+1200 1230+2000
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
1000+1540 1610+2000
1000+1630 1700+2000
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
      <Card title={this.props.name} extra={<b>{this.props.total.toFixed(2)}</b>}>
        {this.props.weeks.map((week, index) => {
          return (
            <div key={index}>
              <Timeline>
                {week.days.map((day, index) => {
                  return (
                    <Timeline.Item key={index} dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                      <span style={{float: 'right'}}><small>{day.total.toFixed(2)}h</small></span>
                      {day.timespans.map((t, index) => {
                        return <span key={index} style={{display: "block"}}>{strftime("%H:%M", t.start)}-{strftime("%H:%M", t.stop)}</span>;
                      })}
                    </Timeline.Item>
                  );
                })}
              </Timeline>
              <div style={{marginTop: -10}}></div>
              <Timeline.Item className="ant-timeline-item-last" dot={<Icon type="calendar" style={{ fontSize: '16px'}} />}>
                 Week total
                <span style={{float: 'right'}}><b>{week.total.toFixed(2)}h</b></span>
              </Timeline.Item>
            </div>
          );
        })}
      </Card>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesheet: exampleTimesheet,
    };
  }

  timesheetChange(event) {
    this.setState({timesheet: event.target.value});
  }

  timecardData() {
    return this.state.timesheet.split(/\n\n+/).map(person => {
      const lines = person.split(/\n/);
      const name = lines.shift();
      let total = 0;

      // lol joining and splitting again
      const weeks = lines.join("\n").split(/\nweek\n/).map(wline => wline.split("\n")).map(weekDays => {
        let weekTotal = 0;
        const days = weekDays.map(line => {
          let dayTotal = 0;

          const timespans = line.split(/\s+/).map(timespanString => {
            let [start, stop] = timespanString.split(/[-+]/);
            if(start.length < 4) start = "0" + start;
            if(stop.length < 4) stop = "0" + stop;

            start = insert(start, 2, ':');
            stop  = insert(stop, 2, ':');
            start = new Date(`2017-01-03 ${start}:00`);
            stop  = new Date(`2017-01-03 ${stop}:00`);

            dayTotal += (stop - start) / 1000 / 60 / 60;

            return {start, stop};
          });

          weekTotal += dayTotal;
          return {total: dayTotal, timespans};
        });

        total += weekTotal;
        return {total: weekTotal, days}
      });

      return {
        name,
        total,
        weeks,
      }
    });

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
            <Col span={6} className="noPrint">
              <Input
                type="textarea"
                placeholder=""
                // defaultValue={exampleTimesheet}
                value={this.state.timesheet}
                onChange={this.timesheetChange.bind(this)}
                autosize={{ minRows: 2 }} />
            </Col>
            <Col className="printFullWidth" span={18}>
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
