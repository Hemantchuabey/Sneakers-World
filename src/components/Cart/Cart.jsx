import React, { Fragment, useState } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector,useDispatch } from "react-redux";

const Cart = ({ openModel, setOpen }) => {
  return (
    <Fragment>
      <Dialog
        open={openModel}
        handler={() => setOpen(false)}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        {/* <DialogFooter>
          
        </DialogFooter> */}
      </Dialog>
    </Fragment>
  );
};

export default Cart;
