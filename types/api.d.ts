
type APIData = {
  result?: any[];
  error?: APIError;
};

type APIError = {
  code: number;
  message: string;
};

type User = {
  id?: number;
  dateCreated?: string;
  dateUpdated?: string;
} & UserInputData;

type UserInputData = {
  first: string;
  last: string;
}
