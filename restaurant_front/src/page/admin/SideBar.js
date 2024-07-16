import {Row, Col, Container} from 'react-bootstrap'
import { FaRegClipboard } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";
import {Gear, House, DoorOpen, Bank, Bell, Sticky } from 'react-bootstrap-icons';
const SideBar = () => {
    return (
        <Container id='adminContainer'>
            <Row>
                <Col className='border border-dark d-flex align-items-center justify-content-start' xs={4}>
                    <div className='border border-dark ms-4 p-2'>로고이미지</div><div className='ms-4 fs-5 fw-bold'>Admin</div>
                </Col>
                <Col className='border border-dark p-4' xs={8}>
                    <div className='border border-dark d-inline p-2'>선택된 메뉴명 표시</div>
                </Col>
            </Row>
            <Row>
                <Col className='border border-dark text-center' xs={4}>
                    <Gear className='gearIcon'/>
                    <Row className='mt-3'>
                        <Col>
                            <House className='me-4 fs-5'/>
                            <DoorOpen className='fs-5'/>
                        </Col>
                    </Row>
                        <div className='row mt-4'><hr/></div>
                    <Row className='float-start'>
                        <Bank/>
                    </Row>
                    <Row>
                        <Bell/>
                    </Row>
                    <Row >
                        <Col><Sticky/></Col>
                    </Row>
                    <Row className='float-start'>
                        <TbClipboardText/>
                    </Row>
                    <Row className='float-start'>
                        <IoCalendarNumberOutline/>
                    </Row>
                    <Row className='float-start'>
                        <FaRegClipboard/>
                    </Row>
                </Col>
            </Row>
            
        </Container>
    )
}
export default SideBar