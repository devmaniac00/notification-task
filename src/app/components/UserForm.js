"use client";
import React from "react";

import { useForm } from "react-hook-form";
import styles from "./UserForm.module.css";

import dotenv from "dotenv";
dotenv.config();

const URL = process.env.NEXT_PUBLIC_APP_BASE_URL;

const UserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.formGroup}>
        <label htmlFor="notificationInterval">Notification Interval</label>
        <select
          id="notificationInterval"
          {...register("notificationInterval", { required: true })}
        >
          <option value="">Select interval</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        {errors.notificationInterval && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formGroup}>
        <label htmlFor="searchQuery">Search Query</label>
        <input
          id="searchQuery"
          type="text"
          placeholder="..."
          {...register("searchQuery", { required: true })}
        />
        {errors.searchQuery && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formGroup}>
        <label htmlFor="candidateName">Candidate Name</label>
        <input
          id="candidateName"
          type="text"
          placeholder="..."
          {...register("candidateName", { required: true })}
        />
        {errors.searchQuery && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formGroup}>
        <label htmlFor="weeklyNotificationDay">Weekly Notification Day</label>
        <select
          id="weeklyNotificationDay"
          {...register("weeklyNotificationDay", { required: true })}
        >
          <option value="">Select day</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Friday</option>
          <option value="sunday">Friday</option>
        </select>
        {errors.weeklyNotificationDay && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formGroup}>
        <label htmlFor="emai">Email</label>
        <input
          id="emai"
          type="email"
          placeholder="email@gmail.com"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formGroup}>
        <label htmlFor="notificationTime">Notification Time</label>
        <input
          id="notificationTime"
          type="time"
          {...register("notificationTime", { required: true })}
        />
        {errors.notificationTime && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formGroup}>
        <label htmlFor="relevancyScore">Relevancy Score</label>
        <input
          id="relevancyScore"
          type="number"
          min={0}
          {...register("relevancyScore", { required: true })}
        />
        {errors.relevancyScore && (
          <span className={styles.errorText}>This field is required</span>
        )}
      </section>

      <section className={styles.formActions}>
        <button type="button" className={styles.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={styles.createButton}>
          Create
        </button>
      </section>
    </form>
  );
};

export default UserForm;
