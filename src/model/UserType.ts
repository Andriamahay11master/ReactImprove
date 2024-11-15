export type UserType = {
  picture?: {
    large: string;
    medium: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
  registered: {
    age: number;
    date: string;
  };
  getData(): void;
};
