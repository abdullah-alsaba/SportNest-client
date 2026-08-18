"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Pencil, Trash2 } from "lucide-react";
import { AlertDialog, Button, Modal } from "@heroui/react";
import { updateFacility, deleteFacility } from "@/lib/action";
import { toast } from "react-toastify";

const timeSlotsList = [
  "Morning (6AM-12PM)",
  "Afternoon (12PM-6PM)",
  "Evening (6PM-10PM)",
  "Night (10PM-12AM)",
];

const ManageFacilityCard = ({ facility }) => {
  const {
    _id,
    name,
    facility_type,
    image,
    location,
    price_per_hour,
    capacity,
    available_slots = [],
    description,
  } = facility;

  const [selectedSlots, setSelectedSlots] = useState(available_slots || []);

  const handleSlotToggle = (slot) => {
    setSelectedSlots((prev) =>
      prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]
    );
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedData = {
      name: formData.get("name"),
      facility_type: formData.get("facility_type"),
      image: formData.get("image"),
      location: formData.get("location"),
      price_per_hour: Number(formData.get("price_per_hour")),
      capacity: Number(formData.get("capacity")),
      description: formData.get("description"),
      available_slots: selectedSlots,
    };

    const res = await updateFacility(_id, updatedData);
    if (res.modifiedCount > 0 || res.acknowledged) {
      toast.success("Facility updated successfully!");
    }
    window.location.reload();
  };

  const handleDelete = async () => {
    const res = await deleteFacility(_id);
    if (res.deletedCount > 0) {
      toast.success("Facility deleted successfully!");
    }
    window.location.reload();
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-slate-800">
        <Image
          src={image || "/heroimg.png"}
          alt={name}
          width={500}
          height={300}
          className="h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          {facility_type}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{name}</h3>

        <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <MapPin size={14} className="shrink-0 text-gray-400" />
          <span className="truncate">{location}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 dark:border-slate-800 pt-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              PRICE PER HOUR
            </p>
            <p className="text-base font-bold text-green-700 dark:text-green-400">
              ${Number(price_per_hour).toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Modal>
              <Modal.Trigger>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition hover:bg-emerald-200 cursor-pointer"
                  aria-label="Edit facility"
                >
                  <Pencil size={16} />
                </button>
              </Modal.Trigger>

              <Modal.Backdrop>
                <Modal.Container>
                  <Modal.Dialog className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
                    <Modal.CloseTrigger />

                    <Modal.Header>
                      <Modal.Heading>Edit Facility</Modal.Heading>
                    </Modal.Header>

                    <form onSubmit={handleUpdate}>
                      <Modal.Body className="space-y-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Facility Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            defaultValue={name}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                              Facility Type
                            </label>
                            <select
                              name="facility_type"
                              required
                              defaultValue={facility_type}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600 bg-white"
                            >
                              <option value="Football">Football</option>
                              <option value="Badminton">Badminton</option>
                              <option value="Cricket">Cricket</option>
                              <option value="Basketball">Basketball</option>
                              <option value="Tennis">Tennis</option>
                              <option value="Swimming">Swimming</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                              Price Per Hour ($)
                            </label>
                            <input
                              type="number"
                              name="price_per_hour"
                              required
                              min="0"
                              step="0.01"
                              defaultValue={price_per_hour}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                              Location
                            </label>
                            <input
                              type="text"
                              name="location"
                              required
                              defaultValue={location}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">
                              Capacity (People)
                            </label>
                            <input
                              type="number"
                              name="capacity"
                              required
                              min="1"
                              defaultValue={capacity}
                              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Image URL
                          </label>
                          <input
                            type="url"
                            name="image"
                            required
                            defaultValue={image}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-2">
                            Available Time Slots
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {timeSlotsList.map((slot) => {
                              const isSelected = selectedSlots.includes(slot);
                              return (
                                <button
                                  type="button"
                                  key={slot}
                                  onClick={() => handleSlotToggle(slot)}
                                  className={`rounded-full border px-3 py-1 text-xs font-medium transition cursor-pointer ${
                                    isSelected
                                      ? "border-green-600 bg-green-600 text-white"
                                      : "border-gray-300 bg-white text-gray-700 hover:border-green-500"
                                  }`}
                                >
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 mb-1">
                            Description
                          </label>
                          <textarea
                            name="description"
                            rows={3}
                            defaultValue={description}
                            className="w-full rounded-lg border border-gray-300 p-2.5 text-sm outline-none resize-none focus:border-green-600"
                          />
                        </div>
                      </Modal.Body>

                      <Modal.Footer className="mt-4 flex justify-end gap-2">
                        <Button slot="close" variant="tertiary" type="button">
                          Cancel
                        </Button>
                        <Button
                          slot="close"
                          type="submit"
                          className="bg-green-600 text-white hover:bg-green-700"
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Modal.Dialog>
                </Modal.Container>
              </Modal.Backdrop>
            </Modal>

            <AlertDialog>
              <AlertDialog.Trigger>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-600 transition hover:bg-rose-200 cursor-pointer"
                  aria-label="Delete facility"
                >
                  <Trash2 size={16} />
                </button>
              </AlertDialog.Trigger>

              <AlertDialog.Backdrop>
                <AlertDialog.Container>
                  <AlertDialog.Dialog className="sm:max-w-100">
                    <AlertDialog.CloseTrigger />

                    <AlertDialog.Header>
                      <AlertDialog.Icon status="danger" />
                      <AlertDialog.Heading>Delete Facility?</AlertDialog.Heading>
                    </AlertDialog.Header>

                    <AlertDialog.Body>
                      <p>
                        Are you sure you want to delete <strong>{name}</strong>? This action cannot be undone.
                      </p>
                    </AlertDialog.Body>

                    <AlertDialog.Footer>
                      <Button slot="close" variant="tertiary">
                        Cancel
                      </Button>

                      <Button
                        slot="close"
                        variant="danger"
                        onClick={handleDelete}
                      >
                        Delete Facility
                      </Button>
                    </AlertDialog.Footer>
                  </AlertDialog.Dialog>
                </AlertDialog.Container>
              </AlertDialog.Backdrop>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFacilityCard;
