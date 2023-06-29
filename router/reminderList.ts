import { Router } from "express";
import reminderBodyDto from "../Dtos/create-reminder";
import Reminders from "../models/reminder";
const router = Router();

let allReminder: Reminders[] = [];

router.get("/", (req, res) => {
  try {
    res.status(201).json(allReminder);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/", (req, res) => {
  try {
    const { title } = req.body as reminderBodyDto;
    const reminders = new Reminders(title);
    allReminder.push(reminders);
    res.status(201).json(allReminder);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/:id", (req, res) => {
  try {
    const id: number = parseInt(req.params.id);
    const updateReminder = allReminder.filter((reminder) => reminder.id === id);
    const { title, isCompleted } = req.body as reminderBodyDto;
    updateReminder[0].isCompleted = isCompleted;
    updateReminder[0].title = title;
    res.json(updateReminder);
  } catch (error) {
    res.status(400).json(error);
  }
});
router.delete("/:id", (req, res) => {
    try {
      const id: number = parseInt(req.params.id);
      const deleteReminder = allReminder.filter(
        (reminder) => reminder.id !== id
        );
        allReminder = deleteReminder;
        res.status(200).json(allReminder);
  } catch (error) {
    res.status(400).json(error);
  }
});

export default router;
