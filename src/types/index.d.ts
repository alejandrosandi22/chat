interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

interface NavLayoutProps {
  children: React.ReactNode;
}

interface ContactsCardProps {
  active: boolean;
  avatar: string;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
}
