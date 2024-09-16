import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Avatar,
  User,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Navbar from "../../Navbar";

export default function Explore() {
  return (
    <main className="mx-2 lg:mx-5">
    <Navbar />

      <section>
        <div>
          <div></div>
          <div className="grid grid-cols-12">
            <Card className="col-span-12 lg:col-span-2 p-3">
              <CardHeader className="flex justify-between">
                <User
                  name="Jane Doe"
                  description="3 min ago"
                  avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                  }}
                />
                <div>
                  <Dropdown>
                    <DropdownTrigger>
                      <button variant="bordered">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width={20}
                          height={20}
                          color={"#000000"}
                          fill={"none"}
                        >
                          <path
                            d="M11.992 12H12.001"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9842 18H11.9932"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.9998 6H12.0088"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem key="new">Report</DropdownItem>
                      
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </CardHeader>
              <Image src="https://nextui.org/images/hero-card-complete.jpeg" />
              <div>
                <div className="flex justify-center py-3">
                  <Button className="bg-[#fb6f92] px-[8rem] text-white shadowed-btn">
                    Recycle
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
