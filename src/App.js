import React, { Component } from 'react';
import './App.css';
import { Button, Input, Row, Col, Card, Timeline, Icon, Tag } from 'antd';

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
      <Card title="Cecilia" extra={<b>30.68h</b>}>
        <Timeline>
          <Timeline.Item>
            11:02am-04:48pm<br/>
            05:44pm-07:52pm
            <span style={{float: 'right'}}><small>7.90h</small></span>
          </Timeline.Item>

          <Timeline.Item>
            11:02am-04:48pm
            <span style={{float: 'right'}}><small>5.77h</small></span>
          </Timeline.Item>
          <Timeline.Item>
            05:44pm-07:52pm
            <span style={{float: 'right'}}><small>2.13h</small></span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Day total
            <span style={{float: 'right'}}>7.90h</span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="calendar" style={{ fontSize: '16px' }} />}>
             Week total
            <span style={{float: 'right'}}><b>7.90h</b></span>
          </Timeline.Item>
        </Timeline>

        <Timeline>
          <Timeline.Item>
            11:35am-08:01pm
            <span style={{float: 'right'}}><small>8.33</small></span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Day total <span style={{float: 'right'}}>8.43</span>
          </Timeline.Item>
          <Timeline.Item>
            05:06pm-08:00pm
            <span style={{float: 'right'}}><small>2.8</small></span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Day total <span style={{float: 'right'}}>2.9</span>
          </Timeline.Item>
          <Timeline.Item>
            05:56pm-07:59pm
            <span style={{float: 'right'}}><small>1.95</small></span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Day total <span style={{float: 'right'}}>2.05</span>
          </Timeline.Item>
          <Timeline.Item>
            05:30pm-08:20pm
            <span style={{float: 'right'}}><small>2.73</small></span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Day total <span style={{float: 'right'}}>2.83</span>
          </Timeline.Item>
          <Timeline.Item>
            11:29am-06:03pm
            <span style={{float: 'right'}}><small>6.47</small></span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
            Day total <span style={{float: 'right'}}>6.57</span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="calendar" style={{ fontSize: '16px' }} />}>
            Week total <span style={{float: 'right'}}><b>22.78</b></span>
          </Timeline.Item>

        </Timeline>
      </Card>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row gutter={16}>
          <Col span={6}>
            <Input
              type="textarea"
              placeholder=""
              defaultValue={exampleTimesheet}
              autosize={{ minRows: 2 }} />
          </Col>
          <Col span={18}>
            <h1>2017-01-02</h1>
            <Row gutter={8}>
              <Col span={6}>
                <Timecard />
              </Col>
              <Col span={6}>
                <Timecard />
              </Col>
              <Col span={6}>
                <Timecard />
              </Col>
              <Col span={6}>
                <Timecard />
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
