/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Col,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import "./AddEventModal.css";
import Select from "react-select";
import { AccountData } from "../../../Data/AccountData";

const AddEventsModal = ({
  modal,
  closeModal,
  onSubmit,
  formData,
  setFormData,
}) => {
  useEffect(() => {
    reset(formData);
  }, [formData]);

  const { reset, handleSubmit } = useForm();

  const options = [
    { value: "appointment", label: "Appointment" },
    { value: "event", label: "Event" },
  ];

  return (
    <div>
      <Modal isOpen={modal} toggle={closeModal} centered size="lg">
        <ModalHeader toggle={closeModal}>Add Event</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md="12">
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Title</label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control-lg form-control"
                        placeholder="Enter..."
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Start Date</label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control-lg form-control"
                        placeholder="Enter..."
                        value={dayjs(formData.start).format("DD/MM/YYYY")}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-03">
                      End Date
                    </label>
                    <div className="form-control-wrap">
                      <input
                        type="text"
                        className="form-control-lg form-control"
                        placeholder="Enter..."
                        value={dayjs(formData.end).subtract(1, 'day').format("DD/MM/YYYY")}
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={formData?.info?.type === "appointment" ? "6" : "12"}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label" htmlFor="default-03">
                      Type
                    </label>
                    <div className="form-control-wrap">
                      <Select
                        options={options}
                        placeholder="Select"
                        defaultValue={options[0]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            info: {
                              ...formData.info,
                              type: e.value,
                            },
                          })
                        }
                        value={
                          (formData.info &&
                            options.find(
                              (option) => option.value === formData.info.type
                            )) ||
                          null
                        }
                        required
                      />
                    </div>
                  </div>
                </div>
              </Col>
              {formData?.info?.type === "appointment" && (
                <Col md="6">
                  <div className="form-group">
                    <div className="form-label-group">
                      <label className="form-label" htmlFor="default-03">
                        Account
                      </label>
                      <div className="form-control-wrap">
                        <Select
                          options={AccountData.map((account) => ({
                            value: account.id,
                            label: account.name,
                          }))}
                          placeholder="Select"
                          defaultValue={options[0]}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              info: {
                                ...formData.info,
                                account: AccountData.find(
                                  (account) => account.id === e.value
                                ),
                              },
                            })
                          }
                          value={
                            formData.info && formData.info.account
                              ? {
                                  value: formData.info.account.id,
                                  label: formData.info.account.name,
                                }
                              : null
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              )}
              <Col md={12}>
                <ul className="action-buttons">
                  <li>
                    <Button color="primary" type="submit">
                      Do Something
                    </Button>
                  </li>
                  <li>
                    <Button color="secondary" onClick={closeModal}>
                      Cancel
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddEventsModal;
