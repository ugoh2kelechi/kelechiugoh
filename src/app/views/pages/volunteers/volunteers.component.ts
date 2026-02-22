import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { TEAM_MEMBERS } from "../../../data/team-members";
import type { TeamMember } from "../../../models/team-member.model";

@Component({
  selector: "app-volunteers",
  imports: [BreadcrumbComponent, NgOptimizedImage],
  templateUrl: "./volunteers.component.html",
  styleUrls: ["./volunteers.component.scss"],
})
export class VolunteersComponent {
  teamMembers: TeamMember[] = TEAM_MEMBERS;
}
