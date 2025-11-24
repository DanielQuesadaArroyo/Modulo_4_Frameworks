import React from "react";
import { Detail } from "./detail.component";
import { MemberDetail } from "./detail.vm";
import { getMemberDetail } from "./api/api";
import { mapMemberDetailToVM } from "./detail.mappers";

interface Props {
  login: string;
}

export const DetailPod: React.FC<Props> = (props) => {
  const { login } = props;
  const [member, setMember] = React.useState<MemberDetail>();

  React.useEffect(() => {
    getMemberDetail(login).then(mapMemberDetailToVM).then(setMember);
  }, [login]);

  return member && <Detail member={member} />;
};
