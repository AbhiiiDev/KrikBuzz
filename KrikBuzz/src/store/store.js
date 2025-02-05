import { create } from "zustand";

const useStore=create((set)=>({
KEY:import.meta.env.VITE_API_KEY,
HOST:import.meta.env.VITE_HOST,
}))