import {useContext,createContext} from "react";

const Appointmentcontext = createContext()
export const useAppointments = () => useContext(Appointmentcontext);