import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Tab, Tabs } from 'react-bootstrap'
import Modal from '@/components/contents/Modal'
import Popover from '@/components/contents/Popover'
import Tooltip from '@/components/contents/Tooltip'
import Checkbox from '@/components/contents/Checkbox'
import Accordion from '@/components/contents/Accordion'
import TextInput from '@/components/contents/TextInput'
import RadioGroup from '@/components/contents/RadioGroup'
import Switch from '@/components/contents/Switch'
import SelectBox from '@/components/contents/SelectBox'

function Comp() {
  return (
    <>
      <OnlyClassNames />
      <hr />
      <OnlyReactBS />
    </>
  )
}

function OnlyClassNames() {
  return (
    <>
      <p>
        <b>classname 으로만 처리하는 경우 (classname으로만 스타일 처리가 가능할 때) </b>
        <a href="https://getbootstrap.com/docs/4.6/components" target="_blank" rel="noreferrer">
          DOCS
        </a>
      </p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>e.g.</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alert</td>
            <td>
              <div className="alert alert-primary" role="alert">
                Trenbe
              </div>
              <div className="alert alert-secondary" role="alert">
                Trenbe
              </div>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/alerts/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Badge</td>
            <td>
              <span className="badge badge-primary mr-2">Primary</span>
              <span className="badge badge-secondary mr-2">Secondary</span>
              <span className="badge badge-danger badge-pill">Danger</span>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/badge/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Button</td>
            <td>
              <button className="btn btn-primary mr-2" role="alert">
                Trenbe
              </button>
              <button className="btn btn-outline-secondary" role="alert">
                Trenbe
              </button>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/buttons/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Pagination</td>
            <td>
              <nav>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link to="#" className="page-link">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link to="#" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="#" className="page-link">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/pagination/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Progress Bar</td>
            <td>
              <div className="progress mb-2">
                <div className="progress-bar" role="progressbar" style={{ width: '50%' }} />
              </div>
              <div className="progress">
                <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '25%' }} />
              </div>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/pagination/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>TextInput</td>
            <td>
              <TextInput label="Email address" type="email" value="test@test.com" help="We'll never share your email with anyone else." />
              <TextInput label="Passwords" type="password" />
              <TextInput inline label="Inline" />
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/forms/#overview" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Checkbox</td>
            <td>
              <Checkbox inline label="inline-checked" checked />
              <Checkbox inline label="inline" />
              <Checkbox />
              <Checkbox label="disabled" disabled />
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/forms/#checkboxes-and-radios" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Radio Group</td>
            <td>
              <RadioGroup group={{ radio1: 1, radio2: 2, radio3: 3 }} value={2} />
              <RadioGroup inline group={{ radio1: 1, radio2: 2, radio3: 3 }} value={3} />
              <RadioGroup inline group={{ radio1: 1, radio2: 2, radio3: 3 }} />
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/forms/#checkboxes-and-radios" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Switch</td>
            <td>
              <div className="form-group">
                <Switch isOn label="ON" />
                <Switch isOn={false} label="OFF" />
                <Switch />
              </div>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/forms/#switches" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Select Box</td>
            <td>
              <SelectBox group={{ option1: 1, option2: 2, option3: 3 }} />
              <SelectBox placeholder="placeholder" group={{ option1: 1, option2: 2, option3: 3 }} />
              <SelectBox value={3} group={{ option1: 1, option2: 2, option3: 3 }} />
              <SelectBox label="Label" group={{ option1: 1, option2: 2, option3: 3 }} />
              <SelectBox inline label="Inline" group={{ option1: 1, option2: 2, option3: 3 }} />
              <SelectBox multiple label="Multiple" group={{ option1: 1, option2: 2, option3: 3 }} />
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/forms/#select-menu" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Button</td>
            <td>
              <div className="d-flex mb-3" style={{ gap: '12px' }}>
                <button type="button" className="btn btn-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-success">
                  Success
                </button>
                <button type="button" className="btn btn-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-info">
                  Info
                </button>
                <button type="button" className="btn btn-light">
                  Light
                </button>
                <button type="button" className="btn btn-dark">
                  Dark
                </button>
                <button type="button" className="btn btn-link">
                  Link
                </button>
              </div>
              <div className="d-flex" style={{ gap: '12px' }}>
                <button type="button" className="btn btn-outline-primary">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Secondary
                </button>
                <button type="button" className="btn btn-outline-success">
                  Success
                </button>
                <button type="button" className="btn btn-outline-danger">
                  Danger
                </button>
                <button type="button" className="btn btn-outline-warning">
                  Warning
                </button>
                <button type="button" className="btn btn-outline-info">
                  Info
                </button>
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
                <button type="button" className="btn btn-outline-dark">
                  Dark
                </button>
              </div>
            </td>
            <td>
              <a href="https://getbootstrap.com/docs/4.6/components/buttons/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function OnlyReactBS() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <p>
        <b>React Bootstrap으로 처리하는 경우 (JavaScript로도 처리를 해야 동작하는 경우) </b>
        <a href="https://react-bootstrap.github.io/components/accordion/" target="_blank" rel="noreferrer">
          DOCS
        </a>
      </p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>e.g.</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Accordion</td>
            <td>
              <Accordion
                defaultActiveIdx={1}
                list={[
                  { title: 'click 1', description: '1111' },
                  { title: 'click 2', description: '2222' },
                ]}
              />
            </td>
            <td>
              <a href="https://react-bootstrap-v4.netlify.app/components/accordion/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Dropdown</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
            <td>
              <a href="https://react-bootstrap-v4.netlify.app/components/dropdown/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Modal</td>
            <td>
              <button className="btn btn-outline-primary" onClick={() => setOpenModal(true)}>
                모달 열기
              </button>
              <Modal title="모달" show={openModal} onClose={() => setOpenModal(false)}>
                이것이 모달입니다
              </Modal>
            </td>
            <td>
              <a href="https://react-bootstrap-v4.netlify.app/components/modal/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Popover</td>
            <td>
              <Popover
                id="popover-test"
                title="Popover Right"
                triggerProps={{ placement: 'top' }}
                description={
                  <>
                    And here's some <strong>amazing</strong> content. It's very engaging. right?
                  </>
                }
              >
                <button className="btn btn-primary">Click me to see</button>
              </Popover>
            </td>
            <td>
              <a href="https://react-bootstrap-v4.netlify.app/components/overlays/#popovers" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Tabs</td>
            <td>
              <ControlledTabs />
            </td>
            <td>
              <a href="https://react-bootstrap-v4.netlify.app/components/tabs/" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
          <tr>
            <td>Tooltip</td>
            <td>
              <Tooltip id="tooltip-test" content={<div>Tooltip!!!!!</div>}>
                <span className="material-icons">warning</span>
              </Tooltip>
            </td>
            <td>
              <a href="https://react-bootstrap-v4.netlify.app/components/overlays/#tooltips" target="_blank" rel="noreferrer">
                LINK
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function ControlledTabs() {
  const [key, setKey] = useState('home')

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k || '')}>
      <Tab eventKey="home" title="Home">
        <p className="p-2">HOME</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p className="p-2">PROFILE</p>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <p className="p-2">CONTACT</p>
      </Tab>
    </Tabs>
  )
}

export default Comp
