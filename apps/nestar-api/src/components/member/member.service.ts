import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Member } from "../../libs/dto/member/member";
import { LoginInput, MemberInput } from "../../libs/dto/member/member.input";

@Injectable()
export class MemberService {
	constructor(@InjectModel("Member") private readonly memberModel: Model<Member>) {}

	public async signup(input: MemberInput): Promise<Member> {
		// TODO: password hashing
		try {
			const result = await this.memberModel.create(input);
			// TODO Authentication via Token
			return result;
		} catch (err) {
			console.log("Error, Sirvice.model", err);
			throw new BadRequestException(err);
		}
	}

	public async login(input: LoginInput): Promise<Member> {
		// TODO password hashing
		const result = this.memberModel.findOne({ memberNick: input.memberNick });
		// TODO Authentication via Token
		if (!result) throw new BadRequestException();
		return result;
	}

	public async updateMember(): Promise<string> {
		return "updateMember executed";
	}

	public async getMember(): Promise<string> {
		return "getMember executed";
	}
}
