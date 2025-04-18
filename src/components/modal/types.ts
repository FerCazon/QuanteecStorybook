import { DashboardSliderProps } from './Dashboard/types'
import { StatusSliderProps } from './Status/types'

export interface ModalProps {
  onClose: () => void
  statusProps?: StatusSliderProps
  dashboardProps?: DashboardSliderProps
  defaultSection?: 'status' | 'dashboard'
}
