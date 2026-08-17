"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { getCancelFacility } from "@/lib/action";
import { toast } from "react-toastify";

const CancelBookingsButton = ({_id}) => {
    const handelCancelButton = async () => {
      const cancelFacility = await getCancelFacility(_id);

      if (cancelFacility.deletedCount > 0) {
        toast.success("Booking cancelled successfully");
        }
        window.location.reload()
    };
    

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="flex items-center gap-1.5 text-xs text-red-500 cursor-pointer">
          <Trash2 size={14} />
          Cancel
        </button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>Cancel Your Booking?</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                Do you want to <strong>cancel your booking</strong>? This action
                cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Close
              </Button>

              <Button
                slot="close"
                variant="danger"
                onClick={handelCancelButton}>
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBookingsButton;
