export type ThreeInRowCellPlayer = "p1" | "p2";

export interface ThreeInRowBoxCellProps {
  player: ThreeInRowCellPlayer;
  isVisible: boolean;
  onPress?: () => void;
  key?: string;
  focus?: boolean;
  disabled?: boolean;
}
