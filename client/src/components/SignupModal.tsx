import Modal from "@mui/material/Modal";
import type { Data } from "../types/types";
import type React from "react";

interface SignupModalProps {
  open: boolean;
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
  handleClose: () => void;
}

const onChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  console.log(e.target.name);
};

const SignupModal = ({
  open,
  data,
  setData,
  handleClose,
}: SignupModalProps) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form action="">
          <input
            type="title"
            name="title"
            value={data.title}
            onChange={onChangeHandler}
          />
          <textarea
            rows={10}
            cols={10}
            placeholder="Video Description"
            onChange={onChangeHandler}
          />

          <input type="file" name="thumbnail" id="thumbnail" />
        </form>
      </Modal>
    </div>
  );
};

export default SignupModal;
