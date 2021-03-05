export type CreateOrderContainerProps = {
  handleClose: () => void;
  handleClearCity: () => void;
  handleSelectCity: (event: React.ChangeEvent<{ value: unknown }>) => void;
  selectedCity?: number;
};
